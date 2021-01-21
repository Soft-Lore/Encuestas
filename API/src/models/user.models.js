const {Schema,model} = require('mongoose');

const MongooseUnique = require('mongoose-unique-validator');

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
        lowercase:true,
        validate:[validateEmail,'Please enter a valid email'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please complete the Email']
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
    }
},{
    timestamps:true
});

module.exports = model('Users',User);