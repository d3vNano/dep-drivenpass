import joi from "joi"

const authSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})

export { authSchema }