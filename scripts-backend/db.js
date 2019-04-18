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
    sex: Boolean,
    country: String,
    bloodgroup: Number,
    resus: Boolean,
    content: [String]
});

//При створенні моделі задається назва колекції (таблиці)
var User = mongoose.model('user', UserSchema);


exports.getUsers = function (callback) {
    User.find({}, function (error, arr) {
        callback(error, arr);
    });
};

exports.saveUser = function (newUser, cb) {
    var user1 = new User(newUser);
    user1.save(cb);
};