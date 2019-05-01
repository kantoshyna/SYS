exports.mainPage = function (req, res) {
    res.render('main', {
        pageTitle: 'Головна'
    });
    sessionStorage.setItem("id", "1");
    $("#menu #1").css("background-color", "#30a2f0");
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