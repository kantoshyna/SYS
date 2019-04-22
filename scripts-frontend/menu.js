$(function () {

    if (localStorage.getItem("id")) {
        $("#menu #" + localStorage.getItem("id")).css("background-color", "#30a2f0");
        $("#menu #" + localStorage.getItem("id")).css("color", "#ffffff");
    } else {
        localStorage.setItem("id", "1");
    }




    $('.list-group-item').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        localStorage.setItem("id", $(this).attr("id"));
        console.log(localStorage.getItem("id"));
    });

    $('#menu-open').click(function () {
        if ($('#menu').css('display') == 'block') {
            $('#menu').css('display', 'none');
        } else {
            console.log($('#menu').css('display'));
            $('#menu').css('display', 'inline-block');
        }
        //    $('#menu-open').css('display', 'none');
    });
});