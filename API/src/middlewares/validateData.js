const Boom = require("@hapi/boom");

const ValidateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
    } catch (error) {
      res.send(Boom.badData(error));
    }
  };
};
