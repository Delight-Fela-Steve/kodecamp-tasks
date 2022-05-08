const Joi = require('joi');

const user = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50),
        
    lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(50),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required()
})