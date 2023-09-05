import joi from 'joi-oid'

export const citySchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    state: joi.string().required(),
    country: joi.string().required(),
    interests: joi.array().items(joi.string()),
    anniversary: joi.string().required(),
    location: joi.string().required(),
    itineraries_id: joi.array().items(joi.objectId())
})