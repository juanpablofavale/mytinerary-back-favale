import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min: 6,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 6
}

export const signUpSchema = joi.object({
    email: joi.string().required().email(),
    password: joiPwd(complexityOptions),
    name: joi.string().required(),
    lastName: joi.string().required(),
    image: joi.string().allow(''),
    country: joi.any()
})