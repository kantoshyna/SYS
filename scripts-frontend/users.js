var Templates = require("../Templates");
var api = require("../API");

var $User_list = $('#userlist');

function showUserList(list) {
    $User_list.html("");

    function showOneUser(User) {
        var html_code = Templates.oneUser({
            User: User
        });
        var $node = $(html_code);
        $User_list.append($node);
    }

    list.forEach(showOneUser);
}

function initialiseUsers(data) {
    api.getUserList(function (error, data) {
        showUserList(data);
    });
}