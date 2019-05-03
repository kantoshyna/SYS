var API_URL = "http://localhost:9090";

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
    backendGet("/api/profiles/", callback);
};

exports.loginUser = function () {
    var obj = $('#logwind').serializeJSON();
    backendPost("/api/login", obj, callback);
    return false;
};

exports.saveChangedOrgan = function (organ, price) {

};

/*
exports.createOrder = function (order_info, callback) {
    backendPost("/api/create-order/", order_info, callback);
};*/