var templates = require('./Templates');

$('.oneuserbutton').click(function () {
    if (!!localStorage.getItem('user')) {
        alert("Ви не можете писати повідомлення користувачу, доки не авторизуєтесь.");
    } else {
        var mailwindow = $("#pro-logsite");
        var mailsite = document.createElement('div');
        mailsite.id = "logsite";
        var mailwind = document.createElement('form');
        mailwind.id = "mailwind";
        mailwind.className = "logwind";
        mailwind.innerHTML = templates.mailWindow();
        mailsite.append(mailwind);
        mailwindow.append(mailsite);
    }
    $(document).mouseup(function (e) {
        var logwind = $('#mailwind');
        if (logwind.has(e.target).length === 0) {
            loginwindow.empty();
            loginwindow.id = "pro-logsite";
        }
    });
});