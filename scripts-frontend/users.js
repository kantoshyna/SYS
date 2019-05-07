var Templates = require("./Templates");
var api = require("./api");

var $User_list = $("#userlist");

function showUserList(list) {

  function showOneUser(User) {
    var html_code = Templates.oneUser({
      user: User
    });
    var $node = $(html_code);
    $User_list.append($node);
    console.log(User);
  }

  list.forEach(showOneUser);
  console.log('--successfully showed user list');
}

$(document).ready(function () {
  var currentLocation = window.location.pathname;
  switch (currentLocation) {
    case '/users':
      api.getUserList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-brain':
      api.getBList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getBList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-leftkidney':
      api.getLKList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getLKList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-rightkidney':
      api.getRKList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getRKList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-leftlung':
      api.getLLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-rightlung':
      api.getRLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-stomach':
      api.getSList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-liver':
      api.getLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
  }
});