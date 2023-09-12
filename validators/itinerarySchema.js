import joi from 'joi-oid'

export const itinerarySchema = joi.object({
    usrImage: joi.string().required(),
    usrName: joi.string().required(),
    price: joi.number().required().min(1).max(5),
    duration: joi.number().required(),
    hashtags: joi.array().items(joi.string()).required(),
    city_id: joi.objectId().required(),
    name: joi.string().required()
})