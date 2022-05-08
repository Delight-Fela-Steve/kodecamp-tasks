const Joi = require('joi');

exports.userValidation = (user)=>{
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(50),
            
        lastName: Joi.string().min(3).max(50),
    
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    });
    return userSchema.validate(user)
}