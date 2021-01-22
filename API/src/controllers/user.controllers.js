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
    let body = req.body;

    let user = new User({
        name:body.name,
        email:body.email,
        password:bcrypjs.hashSync(body.password,10),
        role:body.role
    });

    user.save((err,userDB)=>{
        
        if (err) {
            return res.status(400).json({
                ok:false,
                message:'Bad Request',
                error: err
            });
        }

        return res.status(200).json({
            ok:true,
            message:'User successfully created',
            userDB
        });
    });
}


exports.PutUser = (req,res) => {
    res.send('put user');
}


exports.DeleteUser = (req,res) => {
    res.send('delete user');
}