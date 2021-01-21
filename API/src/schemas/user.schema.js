const joi = require('@hapi/joi');

const validateUser = (user) => {
    const schema = joi.object({
        
        name:joi.string().min(3).max(10).required(),
        
        email:joi.email().min(5).max(100).required(),

        password:joi.string().min(6).max(500).required(),
    });
}

module.exports = validateUser;