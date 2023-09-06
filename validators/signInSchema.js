import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min:4,
    max:15,
    lowerCase:1,
    upperCase:1,
    symbol:1,
    requirementCount:6
}

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joiPwd(complexityOptions)
})