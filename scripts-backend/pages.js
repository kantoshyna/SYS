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

exports.newsPage = function (req, res) {
    res.render('news', {
        pageTitle: 'Новини'
    });
};

exports.offersPage = function (req, res) {
    res.render('offers', {
        pageTitle: 'Пропозиції'
    });
};

exports.contactsPage = function (req, res) {
    res.render('contacts', {
        pageTitle: 'Мої контакти'
    });
};

exports.mapPage = function (req, res) {
    res.render('map', {
        pageTitle: 'Карта світу'
    });
};

exports.usersPage = function (req, res) {
    res.render('users', {
        pageTitle: 'Взаємодії'
    });
};

exports.otherPage = function (req, res) {
    res.render('other', {
        pageTitle: 'Ще що-небудь'
    });
};

exports.logup = function (req, res) {
    res.render('registration', {
        pageTitle: 'Ще що-небудь'
    });
};