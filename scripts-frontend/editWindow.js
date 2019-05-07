var editwindow = $("#pro-logsite");
var templates = require('./Templates');

$('#edit').click(function () {
    // this function doesn`t work at all
    console.log('--clicked on #edit');

    var fotosite = document.createElement('div');
    fotosite.id = "logsite";
    var editwind = document.createElement('form');
    editwind.id = "editwind";
    editwind.className = "logwind";
    editwind.innerHTML = templates.editWindow;

    fotosite.append(editwind);
    editwindow.append(fotosite);
    $(document).mouseup(function (e) {
        var logwind = $('.logwind');
        if (logwind.has(e.target).length === 0) {
            loginwindow.empty();
            loginwindow.id = "pro-logsite";
        }
    });
});