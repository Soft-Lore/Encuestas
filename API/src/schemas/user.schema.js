const joi = require("@hapi/joi");

const validateUser = (user) => {
  const schema = joi.object({
    name: joi.string().required().empty().min(3).max(20),
    email: joi.string().required().empty().email(),
    password: joi.string().required().min(5).max(20)
  });
  return schema.validate(user);
};

module.exports = validateUser;
