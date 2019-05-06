var db = require('./db');


exports.mainPage = function (req, res) {
    res.render('main', {
        pageTitle: 'Головна'
    });
};

exports.profilePage = function (req, res) {
    res.render('profile', {
        pageTitle: 'Профіль'
    });
};

exports.offersPage = function (req, res) {
    res.render('offers', {
        pageTitle: 'Пропозиції'
    });
};

exports.usersPage = function (req, res) {
    res.render('users', {
        pageTitle: 'Користувачі'
    });
};

exports.logup = function (req, res) {
    res.render('registration', {
        pageTitle: 'Реєстрація'
    });
};

var users = require('../scripts-frontend/users');
exports.offersBrain = function (req, res) {
    console.log('--offersbrain'); // = TESTER
    var arr = db.topSales('brain');
    res.render('users-o', {
        pageTitle: 'Мозок',
        users: users,
        userList: arr
    });
};
exports.offersLeftKidney = function (req, res) {
    var arr = db.topSales('leftkidney');
    res.render('users-o', {
        pageTitle: 'Ліва нирка',
        users: users,
        userList: arr
    });
};
exports.offersRightKidney = function (req, res) {
    var arr = db.topSales('rightkidney');
    res.render('users-o', {
        pageTitle: 'Права нирка',
        users: users,
        userList: arr
    });
};
exports.offersLeftLung = function (req, res) {
    var arr = db.topSales('leftlung');
    res.render('users-o', {
        pageTitle: 'Ліва легеня',
        users: users,
        userList: arr
    });
};
exports.offersRightLung = function (req, res) {
    var arr = db.topSales('rightlung');
    res.render('users-o', {
        pageTitle: 'Права легеня',
        users: users,
        userList: arr
    });
};
exports.offersStomach = function (req, res) {
    var arr = db.topSales('stomach');
    res.render('users-o', {
        pageTitle: 'Шлунок',
        users: users,
        userList: arr
    });
};
exports.offersLiver = function (req, res) {
    var arr = db.topSales('liver');
    res.render('users-o', {
        pageTitle: 'Печінка',
        users: users,
        userList: arr
    });
};