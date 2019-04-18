//import "complexify/jquery.complexify";

function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

$("#email-input").on('keyup', function () {
    if (!validateEmail($("#email-input").val())) {
        $("#email-input").addClass('incorrect');
    } else {
        $("#email-input").removeClass('incorrect');
    }
});

$("#password-1").complexify({}, function (valid, complexity) {
    $('#per').text(Math.round(complexity));
    $("#progressbar").progressbar({
        value: complexity
    });
    console.log(" Complexity : " + complexity + " , valid : " + valid);
});

$('#reg-form').on('submit', function (event) {
    event.preventDefault();
    var newUser = {
        email: $('#email-input').val()
    };

    backendPost('/api/registration', newUser, function (error, data) {

    });
});

function backendPost(url, data, callback) {
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            callback(null, data);
        },
        error: function () {
            callback(new Error("Ajax Failed"));
        }
    });
}