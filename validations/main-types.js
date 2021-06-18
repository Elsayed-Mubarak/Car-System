const Joi = require('joi');

const CustomTypes = {
    id: Joi.number().min(1).required(),
    page: Joi.number().sign("positive").required(),
    category_id: Joi.number().min(1).required(),
    featured: Joi.bool().required()
}

const RefTypes = {
    id: Joi.number().min(1).required(),
    idNotReq: Joi.number().min(1)
}

module.exports = {
    validateProduct: (body) => {
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            image_uri: Joi.string()
                .required(),
            featured: Joi
                .bool()
                .required(),
            category_id: Joi
            .required()
        })
        return schema.validate(body);
    },
}