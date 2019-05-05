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
    //var user = localStorage.getItem('user');
    if (!localStorage.getItem('user')) {
        $('#2').css('display', 'block');
        $('#usercontent').html('<div id="profile-head"> <span id = "profile-foto" > </span> ' +
            '<span id = "profile-name" > Profile name </span>' +
            '<div id = "profile-country" > Profile country </div> </div>' +
            '<div id = "profile-body" >' +
            '<div class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 " >' +
            '<div class = "col-xs-12 col-sm-12 col-md-12 col-lg-12 " >' +
            '<img src = "../images/contour.png" width = "70%" > <br>' +
            '<button id = "edit" > Редагувати </button> </div> </div>' +
            '<div class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 " >' +
            'Дані профіля' +
            '<div style = "border: 2px solid black" >' +
            '<ul>' +
            '<li id = "gender" style = "text-align: left" > Стать: kek </li>' +
            '<li id = "age" style = "text-align: left" > Вік: -10 </li>' +
            '<li id = "bloodtype" style = "text-align: left" > Група крові: 5 </li>' +
            '<li id = "resus" style = "text-align: left" > Резус - фактор: /</li>' +
            '</ul> </div> </div> </div>');
    } else {
        $('#2').css('display', 'none');
        $('#usercontent').html('<div style="font-size: 16px; margin: 16px">' +
            'Ви не авторизовані! Увійдіть до свого акаунта, щоб мати доступ до цієї сторінки.</div>');
    }
}