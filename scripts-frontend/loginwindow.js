var loginwindow = $("#pro-logsite");
var api = require('./api'); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$("#login").click(function () {
    if (localStorage.getItem('user')) {
        var logsite = document.createElement('div');
        logsite.id = "logsite";
        var logwind = document.createElement('form');
        logwind.id = "logwind";
        logwind.className = "logwind";
        logwind.innerHTML = '<div style = "padding: 5% 5% 2%; border-bottom: 1px grey dotted" >' +
            '<p style = "color: black; font-size:17px"> <b> Авторизація </b> </p>' +

            '</div>' +
            '<div style=" padding: 5% ">' +
            '  <span>Email</span>' +
            '<input type="text" id="input1">  </div>' +

            '   <div style=" padding: 5%"> <span>Пароль</span>' +
            '      <input type="password" id="input2">  </div>' +
            '<div id="wrong-password">Неправильний логін або пароль!</div>' +
            '<div style="padding: 5%; border-top: 1px grey dotted; display: flex">' +
            '<a href="/registration" style="color: black; margin-right: .6em;">Ще не зареєстровані?</a>' +
            '<button class="submit" id="login-submit">Увійти</button>' +
            '</div >';

        logsite.append(logwind);
        loginwindow.append(logsite);

        $("#login-submit").click(function (e) {
            e.preventDefault();
            api.loginUser($('#input1').val(), $('#input2').val(),
                function (error, data) {
                    if (error) {
                        console.log('login failed: ' + error);
                        $('#wrong-password').css('display', 'block');
                    } else {
                        alert("успішний вхід");
                        console.log("success");
                        $('#login').val = "Вийти";
                        window.location.href = "/profile";
                        // open profile page for the user
                    }
                });
        });

    } else {
        localStorage.removeItem('user');
        $('#login').val = "Увійти";
        window.location.href = "/";
    }

});
$(document).mouseup(function (e) {
    var logwind = $('.logwind');
    if (logwind.has(e.target).length === 0) {
        loginwindow.empty();
        loginwindow.id = "pro-logsite";
    }
});