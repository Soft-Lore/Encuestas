const {Router} = require('express');
const userSchema = require('../schemas/user.schema');
const validate = require('../middlewares/validateData');

const app = Router();

const controllers = require('../controllers/user.controllers');

app.get('/api/users',controllers.GetAllUser);

app.get('/api/users/:id',controllers.GetOneUser);

app.post('/api/singup',validate(userSchema),controllers.PostUser);

app.put('/api/users/:id',controllers.PutUser);

app.delete('/api/users/:id',controllers.DeleteUser);



module.exports  = app;