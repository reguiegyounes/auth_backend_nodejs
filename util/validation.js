const Joi=require('@hapi/joi');


const registerValidation=(data)=>{
    const schemaValidate=Joi.object().keys({
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(3).required()
    })
    return schemaValidate.validate(data);
}


const loginValidation=(data)=>{
    const schemaValidate=Joi.object().keys({
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(3).required()
    })
    return schemaValidate.validate(data);
}



const createPostValidation=(data)=>{
    const schemaValidate=Joi.object().keys({
        title:Joi.string().min(3).required(),
        description:Joi.string().min(1).required()
    })
    return schemaValidate.validate(data);
}



module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;
module.exports.createPostValidation=createPostValidation;

