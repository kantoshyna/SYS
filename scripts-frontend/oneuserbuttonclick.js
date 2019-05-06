$('.oneuserbutton').click(function () {

    // this function doesn`t work at all
    $('.oneuserbutton').css('background-color', 'red');

    if (!!localStorage.getItem('user')) {
        alert("Ви не можете писати повідомлення користувачу, доки не авторизуєтесь.");
        console.log('preserved writing by not signed up person');
    } else {
        var mailwindow = $("#pro-logsite");
        var mailsite = document.createElement('div');
        mailsite.id = "logsite";
        var mailwind = document.createElement('form');
        mailwind.id = "mailwind";
        mailwind.className = "logwind";
        mailwind.innerHTML = '<div style="border-bottom: .5px grey dotted; height: 30px; padding: 4px">Написати</div>' +
            '<div><input type="text" style="height: 80%; width: 100%"></div>' +
            '<div style="border-top: .5px grey dotted; height: 30px; padding: 4px">' +
            '<button class="submit">Надіслати</button>' +
            '</div>';
        mailsite.append(mailwind);
        mailwindow.append(mailsite);
        console.log('mailwindow appeared');
    }
    $(document).mouseup(function (e) {
        var logwind = $('#mailwind');
        if (logwind.has(e.target).length === 0) {
            loginwindow.empty();
            loginwindow.id = "pro-logsite";
        }
    });
});