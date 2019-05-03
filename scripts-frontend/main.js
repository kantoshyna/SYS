$(function () {
    if (!!localStorage.getItem('user')) {
        $('#2').css('display', 'block');
    } else {
        $('#2').css('display', 'none');
    }
    require("../complexify/jquery.complexify");
    require('./api.js');
    require('./checks.js');
    require('./edit-profile.js');
    require('./editWindow.js');
    require('./fotowindow.js');
    require('./loginwindow.js');
    require('./menu.js');
    require('./Templates.js');
    require('./users.js');

});