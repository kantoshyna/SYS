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