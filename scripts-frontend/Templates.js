var fs = require('fs');
var ejs = require('ejs');

exports.oneUser = ejs.compile(fs.readFileSync('./templates/oneUser.ejs', "utf8"));
exports.mailWindow = ejs.compile(fs.readFileSync('./templates/mailWindow.ejs', "utf8"));
exports.userProfile = ejs.compile(fs.readFileSync('./templates/userProfile.ejs', "utf8"));