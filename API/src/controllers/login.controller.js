const bcryptjs = require('bcryptjs');
const User = require('../models/user.models');

exports.Login = (req,res) => {
    let body = req.body;

    User.findOne({email:body.email},(Err,userDB)=>{
        if (Err) {
            return res.status(500).json({
                ok:false,
                error:Err
            });
        }

        if (!userDB) {
            return res.status(400).json({
                ok:false,
                err:{
                    message:'wrong user email'
                }
            });
        }

        if (!bcryptjs.compareSync(body.password,userDB.password)) {
            return res.status(400).json({
                ok:false,
                err:{
                    message:'wrong password does not match'
                }
            })
        }

        return res.status(200).json({
            ok:true,
            message:'request satisfactorily made',
            User:userDB
        })
    })
}