var API_URL = "http://localhost:9080";

function backendGet(url, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function (data) {
            callback(null, data);
        },
        error: function () {
            callback(new Error("Ajax Failed"));
        }
    });
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
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

exports.getUserList = function (callback) {
    backendGet("/api/profiles", callback);
};
exports.getBList = function (callback) {
    backendGet("/api/brain", callback);
};
exports.getLKList = function (callback) {
    backendGet("/api/leftkidney", callback);
};
exports.getRKList = function (callback) {
    backendGet("/api/rightkidney", callback);
};
exports.getLLList = function (callback) {
    backendGet("/api/leftlung", callback);
};
exports.getRLList = function (callback) {
    backendGet("/api/rightlung", callback);
};
exports.getSList = function (callback) {
    backendGet("/api/stomach", callback);
};
exports.getLList = function (callback) {
    backendGet("/api/liver", callback);
};

exports.loginUser = function (email, password, callback) {
    backendPost('/api/login', {
        email: [email],
        password: [password]
    }, function (error, data) {
        if (error) {
            console.log('--Error in loginUser: ' + error);
            callback(error);
        } else {
            backendGet('/api/loggedUser', function (error, data) {
                callback(null, data);
            });
        }
    });
};

exports.saveChangedOrgan = function (organ, price) {
    //
};