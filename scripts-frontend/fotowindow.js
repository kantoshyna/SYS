var fotowindow = $("#pro-logsite");

$('#profile-foto').click(function () {
    var fotosite = document.createElement('div');
    fotosite.id = "logsite";
    var fotowind = document.createElement('div');
    fotowind.id = "fotowind";
    fotowind.innerHTML = '<span><b style = "color: black; font-size:17px; display:block"> Фото профіля </b> ' +
        '<button id="choose-file">Вибрати файл</button>' +
        '<span id="newfoto">newfoto</span></span>  ' +
        '<span id="profile-foto-edit"></span>';


    fotosite.append(fotowind);
    fotowindow.append(fotosite);

});

/*
fotowindow.click(function () {
    fotowindow.id = "pro-logsite";
    fotowindow.empty();
});*/