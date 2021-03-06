function validateEmail(email) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(String(email).toLowerCase());
}

$("input").on('input', function () {
    if ($(this).val() != "") {
        $(this).removeClass('incorrect');
    } else {
        $(this).addClass('incorrect');
    }
});

$("#email-input").on('input', function () {
    if (!validateEmail($("#email-input").val())) {
        $("#email-input").addClass('incorrect');
    } else {
        $("#email-input").removeClass('incorrect');
    }
});

function enableP2() {
    if ($("#password-1").val() != "") {
        $("#password-2").removeAttr('disabled');
        $("#repeat-password").css('color', '#333');
    } else {
        $("#password-2").attr('disabled', 'true');
        $("#repeat-password").css('color', 'gray');
    }
}

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
    if ($('#sex').val() == "Чоловік") {
        $sex = true;
    }
    if ($('#resus').val() == "+") {
        $sex = true;
    }
    if ($('input').val() == "") {
        alert("Ви зaповнили не всі поля!");
    } else if ($("#password-1").val() != $("#password-2").val()) {
        alert("Неправильний пароль!");
    } else {
        var newUser = {
            email: $('#email-input').val(),
            password: $('#password-1').val(),
            nickname: $('#nick-input').val(),
            icon: "./images/avs/avatar-js.png",
            sex: $sex,
            country: $('#country').val(),
            bloodgroup: $('#bloodgroup').val(),
            resus: $resus,
            brain: 1,
            leftkidney: 1,
            rightkidney: 1,
            leftlung: 1,
            rightlung: 0,
            stomach: 0,
            liver: 1
        };

        backendPost('/api/registration', newUser, function (error, data) {
            if (error) {
                console.log("--Database error" + error);
            } else {
                console.log("--Database success");
                localStorage.setItem('user', JSON.stringify(data));
                sessionStorage.setItem("id", "2");
                $("#2").trigger('click');
                $("#login").text("Вийти");
                window.location.href = "/profile";
            }
        });
    }
});


function backendPost(url, data, callback) {
    $.ajax({
        url: "http://localhost:9080" + url,
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