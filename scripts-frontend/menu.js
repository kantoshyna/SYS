$(function () {

    if (sessionStorage.getItem("id")) {
        $("#menu #" + sessionStorage.getItem("id")).css("background-color", "#30a2f0");
        $("#menu #" + sessionStorage.getItem("id")).css("color", "#ffffff");
    } else {
        sessionStorage.setItem("id", "1");
        $("#menu #" + sessionStorage.getItem("id")).css("background-color", "#30a2f0");
        $("#menu #" + sessionStorage.getItem("id")).css("color", "#ffffff");
    }

    $('#logo').click(function () {
        $("#1").trigger('click');
    });

    $('.list-group-item').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        sessionStorage.setItem("id", $(this).attr("id"));
        console.log(sessionStorage.getItem("id"));
    });

    $(window).resize(function () {
        if ($(window).width() >= 745) {
            $('#menu').css('display', 'block');
        } else {
            $('#menu').css('display', 'none');
        }
    });

    $('#menu-open').click(function () {
        if ($('#menu').css('display') == 'block') {
            $('#menu').css('display', 'none');
        } else {
            $('#menu').css('display', 'block');
        }
    });

});