var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    //Сторінки
    //Головна сторінка
    app.get('/', pages.mainPage);

    app.get('/profile', pages.profilePage);
    app.get('/news', pages.newsPage);
    app.get('/offers', pages.offersPage);
    app.get('/contacts', pages.contactsPage);
    app.get('/map', pages.mapPage);
    app.get('/users', pages.usersPage);
    app.get('/other', pages.otherPage);
    app.get('/registration', pages.logup);


    app.get('/api/profiles', api.getProfiles);
    app.post('/api/registration', api.createProfile);
    //  app.post('/api/login', api.loadProfile);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки вище
    app.use(express.static(path.join(__dirname, '../')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, '../views'));
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