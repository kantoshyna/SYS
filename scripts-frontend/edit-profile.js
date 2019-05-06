$(function () {

    $("#organ1").on("click", function () {
        $("#organRed1").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ2").on("click", function () {
        $("#organRed2").css("display", "initial");
        $("#organRed1").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ3").on("click", function () {
        $("#organRed3").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ4").on("click", function () {
        $("#organRed4").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ5").on("click", function () {
        $("#organRed5").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ6").on("click", function () {
        $("#organRed6").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ7").on("click", function () {
        $("#organRed7").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed1").css("display", "none");
    });

    $("#notForSale1").on("click", function () {
        $("#twoFields1").css("display", "none");
    });

    $("#forSale1").on("click", function () {
        $("#twoFields1").css("display", "initial");
    });

    $("#sold1").on("click", function () {
        $("#twoFields1").css("display", "none");
    });

    $("#notForSale2").on("click", function () {
        $("#twoFields2").css("display", "none");
    });

    $("#forSale2").on("click", function () {
        $("#twoFields2").css("display", "initial");
    });

    $("#sold2").on("click", function () {
        $("#twoFields2").css("display", "none");
    });

    $("#notForSale3").on("click", function () {
        $("#twoFields3").css("display", "none");
    });

    $("#forSale3").on("click", function () {
        $("#twoFields3").css("display", "initial");
    });

    $("#sold3").on("click", function () {
        $("#twoFields3").css("display", "none");
    });

    $("#notForSale4").on("click", function () {
        $("#twoFields4").css("display", "none");
    });

    $("#forSale4").on("click", function () {
        $("#twoFields4").css("display", "initial");
    });

    $("#sold4").on("click", function () {
        $("#twoFields4").css("display", "none");
    });

    $("#notForSale5").on("click", function () {
        $("#twoFields5").css("display", "none");
    });

    $("#forSale5").on("click", function () {
        $("#twoFields5").css("display", "initial");
    });

    $("#sold5").on("click", function () {
        $("#twoFields5").css("display", "none");
    });

    $("#notForSale6").on("click", function () {
        $("#twoFields6").css("display", "none");
    });

    $("#forSale6").on("click", function () {
        $("#twoFields6").css("display", "initial");
    });

    $("#sold6").on("click", function () {
        $("#twoFields6").css("display", "none");
    });

    $("#notForSale7").on("click", function () {
        $("#twoFields7").css("display", "none");
    });

    $("#forSale7").on("click", function () {
        $("#twoFields7").css("display", "initial");
    });

    $("#sold7").on("click", function () {
        $("#twoFields7").css("display", "none");
    });
});
//var db = require("../scripts-backend/db");
//var api = require('./api');
/*
var back = $("#pro-logsite");

$("#edit").click(function () {
    var editsite = document.createElement('div');
    editsite.id = "editsite";
    var editwind = document.createElement('div');
    editwind.id = "editwind";
    editwind.className = "logwind";
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

    // ============= adding organs ================
    var image = document.createElement('img');
    image.src = "../images/stomach1.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    image.style.zIndex = '4';
    image.style.width = '50px';
    $('#body').append(image);
    // ============================================

    $('#body').click(function (e) {
        e.preventDefault();
        if ($('#toolwindow')) {
            $('#toolwindow').remove();
        }
        var $window = document.createElement('form');
        var x = e.clientX,
            y = e.clientY;
        $window.innerHTML = ' <p style = "background-color: #30a2f0; color:  white; text-align: center; padding-top: 5px; padding-bottom: 5px" >' +
            '<b> Зміна стану органа "" </b></p >' +
            '<p> <input name = "condition" type = "radio" value = "notForSale" id = "notForSale" > Не продається </p>' +
            '<p> <input name = "condition" type = "radio" value = "isForSale" id = "newBlock" > Продається </p>' +
            '<div id = "twoFields" style = "display: none">' +
            '<p> Введіть нову ціну </p> <p style = "padding-bottom: 30px"> <input> </p>' +
            '</div>' +
            '<p> <input name = "condition" type = "radio" value = "sold" id = "attention"> Продано </p>' +
            '<p id = "attTexts" style = "color: red; display: none" > Ця дія невідворотня! </p>' +
            '<p> <input type = "submit" value = "Зберегти" style = "margin-bottom: 0.8em"> </p>';
        $window.style.left = x + 'px';
        $window.style.top = y + 'px';
        $window.id = "toolwindow";
        $('#editwind').append($window);
        /* $window.submit(function (e) {
             e.preventDefault();
             db.updateUser(ourUser);
         });


    });
    $(document).mouseup(function (e) {
        var logwind = $('.logwind');
        if (logwind.has(e.target).length === 0) {
            back.empty();
            back.id = "pro-logsite";
        }
    });
});

$("#newBlock").on("click", function () {
    $("#twoFields").css("display", "initial");
    $("#attTexts").css("display", "none");
});

$("#notForSale").on("click", function () {
    $("#twoFields").css("display", "none");
    $("#attTexts").css("display", "none");
});

$("#attention").on("click", function () {
    $("#twoFields").css("display", "none");
    $("#attTexts").css("display", "initial");
});
/*
var ourUser;
if (ourUser.stomach > 0) {
    var image = document.createElement('img');
    image.src = "../images/stomach1.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    $('#body').append(image);
}
if (ourUser.stomach == 0) {
    var image = document.createElement('img');
    image.src = "../images/stomach2.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    $('#body').append(image);
}
if (ourUser.brain > 0) {
    var image = document.createElement('img');
    image.src = "../images/brain1.png";
    image.style.position = 'absolute';
    image.style.top = '261px';
    image.style.left = '56px';
    $('#body').append(image);
}
if (ourUser.brain == 0) {
    var image = document.createElement('img');
    image.src = "../images/brain2.png";
    image.style.position = 'absolute';
    image.style.top = '261px';
    image.style.left = '56px';
    $('#body').append(image);
}
if (ourUser.leftkidney > 0) {
    var image = document.createElement('img');
    image.src = "../images/leftKidney1.png";
    image.style.position = 'absolute';
    image.style.top = ' 309px';
    image.style.left = '332px';
    $('#body').append(image);
}
if (ourUser.leftkidney == 0) {
    var image = document.createElement('img');
    image.src = "../images/leftKidney2.png";
    image.style.position = 'absolute';
    image.style.top = ' 309px';
    image.style.left = '332px';
    $('#body').append(image);
}
if (ourUser.leftlung > 0) {
    var image = document.createElement('img');
    image.src = "../images/leftLung1.png";
    image.style.position = 'absolute';
    image.style.top = '300px';
    image.style.left = '180px';
    $('#body').append(image);
}
if (ourUser.leftlung == 0) {
    var image = document.createElement('img');
    image.src = "../images/leftLung2.png";
    image.style.position = 'absolute';
    image.style.top = '300px';
    image.style.left = '180px';
    $('#body').append(image);
}
if (ourUser.liver > 0) {
    var image = document.createElement('img');
    image.src = "../images/liver1.png";
    image.style.position = 'absolute';
    image.style.top = ' 236px';
    image.style.left = '288px';
    $('#body').append(image);
}
if (ourUser.liver == 0) {
    var image = document.createElement('img');
    image.src = "../images/liver2.png";
    image.style.position = 'absolute';
    image.style.top = '236px';
    image.style.left = '288px';
    $('#body').append(image);
}
if (ourUser.rightkidney > 0) {
    var image = document.createElement('img');
    image.src = "../images/rightKidney1.png";
    image.style.position = 'absolute';
    image.style.top = ' 237px';
    image.style.left = '331px';
    $('#body').append(image);
}
if (ourUser.rightkidney == 0) {
    var image = document.createElement('img');
    image.src = "../images/rightKidney2.png";
    image.style.position = 'absolute';
    image.style.top = ' 237px';
    image.style.left = '331px';
    $('#body').append(image);
}
if (ourUser.rightlung > 0) {
    var image = document.createElement('img');
    image.src = "../images/rightLung1.png";
    image.style.position = 'absolute';
    image.style.top = ' 247px';
    image.style.left = '178px';
    $('#body').append(image);
}
if (ourUser.rightlung == 0) {
    var image = document.createElement('img');
    image.src = "../images/rightLung2.png";
    image.style.position = 'absolute';
    image.style.top = ' 247px';
    image.style.left = '178px';
    $('#body').append(image);
}*/