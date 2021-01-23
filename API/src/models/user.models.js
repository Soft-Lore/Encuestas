const {Schema,model} = require('mongoose');

const MongooseUnique = require('mongoose-unique-validator');

const jwt = require('jsonwebtoken');

const bcrypjs = require('bcryptjs');

const salt=10;

let validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const ValidRols = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message:'{VALUE} it is not a valid role'
}

const User = new Schema({
    name:{
        type:String,
        required:[true,'The name is necessary'],
    },
    email: {
        type: String,
        required: [true, 'Email is necessary to register'],
        trim:true,
        unique:1,
        lowercase:true,
        validate:[validateEmail,'Please enter a valid email'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please complete the Email'],
        validate: {
            validator: async function(email) {
            
            const user = await this.constructor.findOne({ email });
            
            if(user) {
                
                if(this.id === user.id) {
                    return true;
                }
                return false;
            }
                return true;
            },
            message: props => 'The specified email address is already in use.'
        },
            required: [true, 'User email required']
        
    },
    password:{
        type:String,
        required:[true,'The password is necessary']
    },
    state:{
        type:Boolean,
        default:true
    },
    rols:{
        type:String,
        enum:ValidRols,
        default:'USER_ROLE'
    },
    token:{
        type:String
    }
},{
    timestamps:true
});

// to signup a user
User.pre('save',function(next){
    var user = this;

    if (user.isModified('password')) {
        bcrypjs.genSalt(salt,function (err,salt) {
            if(err) return next(err);
            
            bcrypjs.hash(user.password,salt,function (err,hash) {
                if(err) return next(err);

                user.password=hash;
                next();
            });
        })
    }else{
        next();
    }
});




User.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

User.plugin(MongooseUnique,{message:'{PATH} Must be unique'});

module.exports = model('Users',User);