import joi from "joi-oid"

export const commentSchema = joi.object({
    comment: joi.string().required(),
    user_id: joi.objectId().required(),
    itinerary_id: joi.objectId().required()
})