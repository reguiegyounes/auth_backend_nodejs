const Joi=require('@hapi/joi');


const registerValidation=(data)=>{
    const schemaValidate=Joi.object().keys({
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(3).required()
    })
    return schemaValidate.validate(data);
}



module.exports.registerValidation=registerValidation;

