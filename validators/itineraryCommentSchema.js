import joi from "joi-oid"

export const itineraryCommentSchema = joi.object({
    comment: joi.string().required(),
    user_id: joi.objectId().required()
})