import joi from 'joi'

export const validateSignUpUser = joi.object({
    // _id: joi.any(),
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'El mail es requerido'
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
    //.regex() para especificar más puntualmente
    name: joi.string()
        .min(2)
        .max(50),
    lastname: joi.string()
        .min(2)
        .max(50),
    //.regex() solo caracteres alfanumericos
    image: joi.string()
        .required()
        .uri(),
    country: joi.string()
        .min(2)
        .max(50)
})

export const validateSignInUser = joi.object({
    // _id: joi.any(),
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'El mail es requerido'
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum()
})