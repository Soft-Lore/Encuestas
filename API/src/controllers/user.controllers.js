const bcrypjs = require('bcryptjs');
const _ = require('underscore');

const User = require('../models/user.models');

exports.GetOneUser = (req,res) => {
    res.send('get one');
}


exports.GetAllUser = (req,res) => {
    res.send('get all');
}


exports.PostUser = (req,res) => {
    res.send('post user');
}


exports.PutUser = (req,res) => {
    res.send('put user');
}


exports.DeleteUser = (req,res) => {
    res.send('delete user');
}