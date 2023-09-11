import joi from 'joi-oid'

export const itinerarySchema = joi.object({
    usrImage: joi.string().required(),
    usrName: joi.string().required(),
    price: joi.number().required().min(1).max(5),
    duration: joi.number().required(),
    likes: joi.array().items(joi.any()),
    hashtags: joi.array().items(joi.string()).required(),
    comments: joi.array().items(joi.string()),
    city_id: joi.objectId().required(),
    activities_id: joi.array().items(joi.objectId()),
    name: joi.string().required()
})