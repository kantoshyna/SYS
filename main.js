var loginwindow = document.createElement('div');

$("#login").click(function () {
    loginwindow.setAttribute("id", "logsite");
    loginwindow.innerHTML = '<div class="logwind">' +
        '<span>Логін</span>' +
        '  <input type="text">' +
        '<br><span>Пароль</span>' +
        '   <input type="password">' +
        '      <br><button type="submit">Увійти</button>' +
        '<a href="">Ще не зареєстровані?</a>' +
        '</div>';
    document.body.appendChild(loginwindow);
});