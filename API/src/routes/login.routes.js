const {Router} = require('express');
const app = Router();

const {auth} =require('../middlewares/auth');



const routes = require('../controllers/login.controller');

app.post('/api/login',routes.Login);

app.get('/api/logout',auth,routes.logout);

app.get('/api/profile',auth,routes.profile);

module.exports = app;