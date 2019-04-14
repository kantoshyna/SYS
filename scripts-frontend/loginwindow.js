var loginwindow = $("#pro-logsite");

$("#login").click(function () {
    var logsite = document.createElement('div');
    logsite.id = "logsite";
    var logwind = document.createElement('div');
    logwind.id = "logwind";
    logwind.innerHTML = '<div style = "padding: 5% 5% 2%; border-bottom: 1px grey dotted" >' +
        '<p style = "color: black; font-size:17px"> <b> Авторизація </b> </p>' +

        '</div>' +
        '<div style=" padding: 5% ">' +
        '  <span>Логін</span>' +
        '<input type="text">  </div>' +

        '   <div style=" padding: 5% 5% 7%"> <span>Пароль</span>' +
        '      <input type="password">  </div>' +

        '<div style="padding: 5%; border-top: 1px grey dotted; display: flex">' +
        '<a href="/registration" style="color: black; margin-right: .6em;">Ще не зареєстровані?</a>' +
        '<button type="submit" class="submit">Увійти</button>' +
        '</div >';

    logsite.append(logwind);
    loginwindow.append(logsite);
});

loginwindow.click(function () {
    loginwindow.id = "pro-logsite";
    loginwindow.empty();
});