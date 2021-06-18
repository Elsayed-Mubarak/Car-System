const joi = require('joi')

const registerCarSchema = {
  name: joi
    .string()
    .required()
    .trim()
    .lowercase()
    .pattern(/^[a-zA-Z-0-9 ]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.base': ` name must be consists of letters only`,
      'string.empty': ` name cannot be an empty field`,
      'string.min': ` name should have a minimum length of {#limit} (letters)`,
      'string.max': ` name should have a maximum length of {#limit} (letters)`,
      'string.pattern.base': ` name must be consists of letters only`,
      'any.required': ` name is required`,
    }),
  position: joi
    .string()
    .required()
    .trim()
    .lowercase()
    .pattern(/^[a-zA-Z-0-9 ]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.empty': ` position cannot be an empty field`,
      'any.required': ` position is required`,
    }),
  age: joi.number().required(),
  brand: joi
    .string()
    .required()
    .trim()
    .lowercase()
    .pattern(/^[a-zA-Z-0-9 ]+$/)
    .min(1)
    .max(20)
    .messages({
      'string.base': ` brand must be consists of letters only`,
      'string.empty': ` brand cannot be an empty field`,
      'any.required': ` brand is required`,
    }),

  model: joi.number().integer().required(),
  plateNumber: joi.number().integer().required(),
}

module.exports = {
  registerCar: joi.object(registerCarSchema),
}
