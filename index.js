"use strict";
const express = require('express');
const consign = require('consign')
const bodyParser = require('body-parser')
const db = require('./config/db')
const app = express();

app.db = db
app.use((req, res, next) => {
    res.set('X-Powered-By', 'PHP/7.1.7');
    next();
});
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .then('./app/controllers/validation.js')
    .then('./app/controllers')
    .then('./config/routes.js')
    .into(app)

app.listen(80, () => {
    console.log('Servidor rodando na porta 80')
})