var fs = require('fs');
var ejs = require('ejs');


exports.oneUser = ejs.compile(fs.readFileSync('./templates/oneUser.ejs', "utf8"));