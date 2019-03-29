var loginwindow = $("#pro-logsite");

$('#x').click(function () {
    loginwindow.empty();
});

$("#login").click(function () {
    var logsite = document.createElement('div');
    logsite.id = "logsite";
    var logwind = document.createElement('div');
    logwind.id = "logwind";
    logwind.innerHTML = '<div style = "padding: 5% 5% 2%; border-bottom: 1px grey dotted" >' +
        '<p style = "color: black; font-size:17px"> <b> Авторизація </b> <button class="submit" id="x" style="width: 30px"> x </button></p>' +

        '</div>' +
        '<div style=" padding: 5% ">' +
        '  <span>Логін</span>' +
        '<input type="text">  </div>' +

        '   <div style=" padding: 5% 5% 7%"> <span>Пароль</span>' +
        '      <input type="password">  </div>' +

        '<div style="padding: 5%; border-top: 1px grey dotted">' +
        '<a href="" style="color: black">Ще не зареєстровані?</a>' +
        '<button type="submit" class="submit">Увійти</button>' +
        '</div >';

    logsite.append(logwind);
    loginwindow.append(logsite);
});