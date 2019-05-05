var Templates = require("./Templates");
var api = require("./api");

var $User_list = $("#userlist");

function showUserList(list) {
  $User_list.html("");

  function showOneUser(User) {
    var html_code = Templates.oneUser({
      user: User
    });
    var $node = $(html_code);
    $User_list.append($node);
  }

  list.forEach(showOneUser);
}

function initialiseUsers(data) {
  showUserList(data);
}

$(document).ready(function () {
  api.getUserList(function (error, data) {
    if (error) {
      console.log("not get user list in users.js.api.getUserList" + error);
    } else {
      initialiseUsers(data);
    }
  });
});