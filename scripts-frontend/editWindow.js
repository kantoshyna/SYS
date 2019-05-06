$(function () {

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

});