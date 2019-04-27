var fotowindow = $("#pro-logsite");

$('#profile-foto').click(function () {
    var fotosite = document.createElement('div');
    fotosite.id = "logsite";
    var fotowind = document.createElement('div');
    fotowind.id = "fotowind";
    fotowind.className = "logwind";
    fotowind.innerHTML = '<span><b style = "color: black; font-size:17px; display:block"> Фото профіля </b> ' +
        '<button id="choose-file">Вибрати файл</button>' +
        '<span id="newfoto">newfoto</span></span>  ' +
        '<span id="profile-foto-edit"></span>';


    fotosite.append(fotowind);
    fotowindow.append(fotosite);

});
/*
$(document).mouseup(function (e) {
    var fotowind = $('.logwind');
    if (fotowind.has(e.target).length === 0) {
        fotowindow.empty();
        fotowindow.id = "pro-logsite";
    }
});*/