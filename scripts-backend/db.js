var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@mongodb-1536-0.cloudclusters.net:10003/sell-yourself?authSource=admin');

var db = mongoose.connection;
db.on('error', function (err) {
    console.log('connection	error:', err.message);
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
        throw "such user exists";
    }
    var user1 = new User(newUser);
    user1.save(cb);
}

exports.saveUser = saveUser;

exports.updateUser = function (newUser) {
    // session
};


exports.setupUser = function (email, password) {
    User.find({
        'email': email,
        'password': password
    }, function (error, arr) {
        if (error) throw error;
        if (arr.length > 0) {
            console.log('user exists in db.js.setupUser');
            return arr[0];
            // localStorage.setItem('user', arr[0]);
        } else {
            throw "Such user doesn`t exist";
        }
    });
};

// повертає масив відсортованих у порядку зростання ціни на орган користувачів
exports.topSales = function (organ) {
    return User.find({
        [organ]: {
            $gt: 0
        }
    }).sort({
        [organ]: 1
    });
};