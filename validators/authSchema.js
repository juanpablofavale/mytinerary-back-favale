import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min: 6,
    max: 15,
    lowerCase: 1,
    upperCase: 2,
    numeric: 1,
    symbol: 1,
    requirementCount: 6
}

export const authSchema = joi.object({
    email: joi.string().required().email(),
    password: joiPwd(complexityOptions),
    name: joi.string().required(),
    lastName: joi.string().required(),
    image: joi.string(),
    country: joi.string().required(),
    role: joi.any(),
    verify: joi.any()
})