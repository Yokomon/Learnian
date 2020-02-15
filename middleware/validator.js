const Joi = require('@hapi/joi');

const regValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required(),
    userId: Joi.string().required(),
    email: Joi.string()
      .min(6)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    isLecturer: Joi.boolean(),
    isAdmin: Joi.boolean()
  });
  return schema.validate(data);
};
const loginValidation = data => {
  //   const one = data.username || data.userId || data.email;
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });
  return schema.validate(data);
};
module.exports.regValidation = regValidation;
module.exports.loginValidation = loginValidation;
