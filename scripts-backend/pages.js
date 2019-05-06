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

exports.offersBrain = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Мозок'
    });
};
exports.offersLeftKidney = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Ліва нирка'
    });
};
exports.offersRightKidney = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Права нирка'
    });
};
exports.offersLeftLung = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Ліва легеня'
    });
};
exports.offersRightLung = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Права легеня'
    });
};
exports.offersStomach = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Шлунок'
    });
};
exports.offersLiver = function (req, res) {
    res.render('users-o', {
        pageTitle: 'Печінка'
    });
};