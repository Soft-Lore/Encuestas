const {Router} = require('express');
const userSchema = require('../schemas/user.schema');
const validate = require('../middlewares/validateData');

const app = Router();

const controllers = require('../controllers/user.controllers');

app.get('/users',controllers.GetAllUser);

app.get('/users/:id',controllers.GetOneUser);

app.post('/singup',validate(userSchema),controllers.PostUser);

app.put('/users/:id',controllers.PutUser);

app.delete('/users/:id',controllers.DeleteUser);



module.exports  = app;