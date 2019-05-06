var Templates = require('./Templates');

$(function () {
    ifUser();
    require("../complexify/jquery.complexify");
    require('./api.js');
    require('./checks.js');
    require('./edit-profile.js');
    require('./editWindow.js');
    require('./fotowindow.js');
    require('./loginwindow.js');
    require('./menu.js');
    require('./Templates.js');
    require('./oneuserbuttonclick');
    require('./users.js');
});

function ifUser() {
    if (!!localStorage.getItem('user')) {
        $('#2').css('display', 'block');
        var text = Templates.userProfile({
            user: [JSON.parse(localStorage.getItem('user'))]
        });
        $('#usercontent').html(text);
    } else {
        $('#2').css('display', 'none');
        $('#usercontent').html('<div style="font-size: 16px; margin: 16px">' +
            'Ви не авторизовані! Увійдіть до свого акаунта, щоб мати доступ до цієї сторінки.</div>');
    }
}