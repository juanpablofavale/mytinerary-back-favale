import joi from "joi-oid"

export const commentUpdateSchema = joi.object({
    comment: joi.string().required()
})