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

exports.mapPage = function (req, res) {
    res.render('map', {
        pageTitle: 'Карта світу'
    });
};

exports.interplayPage = function (req, res) {
    res.render('interplay', {
        pageTitle: 'Взаємодії'
    });
};

exports.otherPage = function (req, res) {
    res.render('other', {
        pageTitle: 'Ще що-небудь'
    });
};