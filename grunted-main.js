(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var profiles = require('./data/profiles');

exports.getProfiles = function (req, res) {
    res.send(profiles);
};

exports.createProfile = function (req, res) {
    var register_info = req.body;
    console.log("Creating Profile", register_info);

    res.send({
        success: true
    });
};
},{"./data/profiles":2}],2:[function(require,module,exports){
var register_info = [{
    id: 1,
    nickname: "Valet",
    bloodgroup: 2,
    resus: "+",
    content: ['легені']
}, {
    id: 2,
    nickname: "Chewbacca",
    bloodgroup: 3,
    resus: "-",
    content: ['печінка']
}];
},{}],3:[function(require,module,exports){
(function (__dirname){
/*var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');*/

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    //Сторінки
    //Головна сторінка
    app.get('/', pages.mainPage);

    //Сторінка профіля
    app.get('/profile.html', pages.orderPage);

}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:' + port + '/');
    });
}

exports.startServer = startServer;
}).call(this,"/")
},{"./api":1,"./pages":4}],4:[function(require,module,exports){
exports.mainPage = function (req, res) {
    res.render('main', {
        pageTitle: 'Головна'
    });
};

exports.profilePage = function (req, res) {
    res.render('profile', {
        pageTitle: 'Профіль'
    });
};
},{}]},{},[3]);
