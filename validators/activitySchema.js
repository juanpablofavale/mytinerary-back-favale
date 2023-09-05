import joi from 'joi-oid'

export const activitySchema = joi.object({
    image: joi.string().required(),
    name: joi.string().required(),
    itinerary_id: joi.objectId()
})