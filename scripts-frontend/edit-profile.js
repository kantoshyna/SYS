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
        '<img src="images/contour.png" class="img"> ' +
        '<div style="padding: 3%; border-top: 1px grey dotted">' +
        '<button type="submit" class="submit">Зберегти</button>' +

        '</div>';

    editsite.append(editwind);
    back.append(editsite);
});

back.click(function () {
    back.id = "pro-logsite";
    back.empty();
});