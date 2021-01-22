const joi = require("@hapi/joi");

const validateUser = (user) => {
  const schema = joi.object({
    name: joi.string().required().empty().min(3).max(20).messages({
      "string.base": `"username" should be a type of 'text'`,
      "string.empty": `"username" cannot be an empty field`,
      "string.min": `"username" should have a minimum length of {#limit}`,
      "string.max": `"username" should have a maximum length of {#limit}`,
      "any.required": `"username" is a required field`,
    }),
    email: joi.string().required().empty().email().messages({
      "string.base": `"Email" should be a type of 'text'`,
      "string.empty": `"Email" cannot be an empty field`,
      "any.required": `"email" is a required field`,
    }),
    password: joi.string().required().min(5).max(20).messages({
      "string.base": `"Password" should be a type of 'text'`,
      "string.empty": `"Password" cannot be an empty field`,
      "string.min": `"Password" should have a minimum length of {#limit}`,
      "string.max": `"Password" should have a maximum length of {#limit}`,
      "any.required": `"Password" is a required field`,
    }),
  });
  return schema.validate(user);
};

module.exports = validateUser;
