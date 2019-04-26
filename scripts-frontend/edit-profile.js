var back = $("#pro-logsite");

$("#edit").click(function () {
    var editsite = document.createElement('div');
    editsite.id = "editsite";
    var editwind = document.createElement('div');
    editwind.id = "editwind";
    editwind.innerHTML = ' <div style="padding: 3% 5% 1%; border-bottom: 1px grey dotted">' +
        ' <p style="color: black; font-size:17px"> <b> Редагування </b> ' +

        '</p></div>' +
        '<img src="images/instruction.png" class="img">' +
        '<img src="images/contour.png" class="img" id="body"> ' +
        '<div style="padding: 3%; border-top: 1px grey dotted">' +
        '<button type="submit" class="submit">Зберегти</button>' +

        '</div>';

    editsite.append(editwind);
    back.append(editsite);
});
/*
back.click(function () {
    back.id = "pro-logsite";
    back.empty();
});*/

$('#body').click(function (e) {
    debugger; // DOES NOT WORK
    var $window = document.createElement('form');
    var x = e.clientX,
        y = e.clientY;
    $window.innerHTML = ' <p    style = "background-color: #30a2f0; color:  white; text-align: center; padding-top: 5px; padding-bottom: 5px" >' +
        '<b> Зміна стану органа "" < /b></p >' +
        '<p > <input name = "condition" type = "radio" value = "notForSale" id = "notForSale" > Не продається < /p>' +
        '<p > < input name = "condition" type = "radio" value = "isForSale" id = "newBlock" > Продається < /p>' +
        '<div id = "twoFields" style = "display: none" >' +
        '<p > Введіть нову ціну < /p> <p style = "padding-bottom: 30px" > < input > < /p>' +
        '</div>' +
        '<p > < input name = "condition" type = "radio" value = "sold" id = "attention" > Продано < /p>' +
        '<p id = "attTexts" style = "color: red; display: none" > Ця дія невідворотня! < /p>' +
        '<p > < input type = "submit" value = "Зберегти" > < /p>';
    $window.style.position = 'absolute';
    $window.style.left = x + 'px';
    $window.style.top = y + 'px';
    document.appendChild($window);
});