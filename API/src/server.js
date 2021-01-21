const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

//initialization
require('./config/config');

app.listen(process.env.PORT,()=>{
    console.log(`Server on Port ${process.env.PORT}`);
});

//settings
dotenv.config();

//Database
require('./database');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.use(require('./routes/user.routes'));