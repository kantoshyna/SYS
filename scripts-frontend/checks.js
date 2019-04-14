import "complexify/jquery.complexify";

function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

$("#email-input").change(function () {
    if (!validateEmail($("#email-input").text())) {
        $("#email-input").addClass('incorrect');
    } else {
        $("#email-input").removeClass('incorrect');
    }
});

$("#password-input").complexify({}, function (valid, complexity) {
    $('#per').text(Math.round(complexity));
    $("#progressbar").progressbar({
        value: complexity
    });
    console.log(" Complexity : " + complexity + " , valid : " + valid);
});