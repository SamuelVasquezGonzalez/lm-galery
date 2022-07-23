const express = require('express');
const session = require('cookie-session')
const ejs = require('ejs');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('colors');

const app = express();

// Ajustes
app.set('Puerto', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middlewares
app.use(express.json());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../static")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    nombre: 'usuario',
    keys: ['llave-1','llave-2']
}));

module.exports = app;

