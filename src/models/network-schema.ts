import joi from "joi";

const networkSchema = joi.object({
    title: joi.string().max(50).trim().required(),
    network: joi.string().max(50).trim().required(),
    password: joi.string().min(8).trim().required()
});

export { networkSchema };