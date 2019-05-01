//var Templates = require("./Templates");
//var api = require("./api");
var fs = require('fs');
var ejs = require('ejs');

var $User_list = $('#userlist');
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

var oneUser = ejs.compile(fs.readFileSync('../templates/oneUser.ejs', "utf8"));

function showUserList(list) {
    $User_list.html("");

    function showOneUser(User) {
        var html_code = oneUser({
            User: User
        });
        var $node = $(html_code);
        $User_list.append($node);
    }

    list.forEach(showOneUser);
}

function initialiseUsers(data) {
    getUserList(function (error, data) {
        showUserList(data);
    });
}

exports.initialiseUsers = initialiseUsers;

$(document).ready(function () {
    getUserList(function (error, data) {
        initialiseUsers(data);
    });
});

function getUserList(callback) {
    backendGet("/api/profiles/", callback);
}