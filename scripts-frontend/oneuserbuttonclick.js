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
        mailsite.append(mailwind);
        mailwindow.append(mailsite);
    }
});