const Joi = require("@hapi/joi");

const validatePathParams = schema => (req, res, next) => {
  const result = schema.validate(req.params);
  if (result.error === null) next();
  else res.status(400).json({});
};

const getProductByIdSchema = Joi.object().keys({
  id: Joi.number().integer()
});

module.exports = { getProductByIdSchema, validatePathParams };
