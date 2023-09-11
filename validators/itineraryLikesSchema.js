import joi from 'joi-oid'

export const itineraryLikesSchema = joi.object({
    _id: joi.objectId().required()
})