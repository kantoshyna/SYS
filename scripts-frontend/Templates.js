var fs = require('fs');
var ejs = require('ejs');

exports.oneUser = ejs.compile(fs.readFileSync('./views/templates/oneUser.ejs', "utf8"));
exports.mailWindow = ejs.compile(fs.readFileSync('./views/templates/mailWindow.ejs', "utf8"));
exports.userProfile = ejs.compile(fs.readFileSync('./views/templates/userProfile.ejs', "utf8"));