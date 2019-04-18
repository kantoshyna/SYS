//import "complexify/jquery.complexify";

function validateEmail(email) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(String(email).toLowerCase());
}

$("#email-input").on('keyup', function () {
    if (!validateEmail($("#email-input").val())) {
        $("#email-input").addClass('incorrect');
        $("#email-input").style('border: red !important');
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
    var $sex = false,
        $resus = false;
    if ($('#sex').val == "Чоловік") {
        $sex = true;
    }
    if ($('#resus').val == "+") {
        $sex = true;
    }
    var newUser = {
        email: $('#email-input').val(),
        password: $('#password-1').val(),
        nickname: $('#nick-input').val(),
        sex: $sex,
        country: $('#country').val(),
        bloodgroup: $('#bloodgroup').val(),
        resus: $resus,
        content: []
    };

    backendPost('/api/registration', newUser, function (error, data) {
        if (!data.success) {
            console.log("Database error");
        } else {
            console.log("Database success");
        }
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