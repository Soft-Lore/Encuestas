const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path')

global.atob = require("atob");
global.Blob = require('node-blob');

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
app.use(express.static(path.join(__dirname, '../build')))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use(require('./routes/user.routes'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/poll.routes'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

//exports Test
module.exports = app;