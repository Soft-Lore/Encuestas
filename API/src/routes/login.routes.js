const {Router} = require('express');
const app = Router();

const routes = require('../controllers/login.controller');

app.post('/login',routes.Login);

module.exports = app;