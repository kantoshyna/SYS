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