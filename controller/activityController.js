import Activity from "../models/Activity.js"
import Itinerary from "../models/Itinerary.js"

const genRes = {
    col:{
        count:0,
    },
    response: [],
    success: true,
    error: null
}

const activityController = {
    getAll: async (req, res, next) => {
        try {
            genRes.response = await Activity.find()
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    getById: async (req, res, next) => {
        try {
            genRes.response = await Activity.findById(req.params.id)
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    createOne: async (req, res, next) => {
        try {
            genRes.response = await Activity.create(req.body)
            genRes.itineraryChange = await Itinerary.findByIdAndUpdate(genRes.response.itinerary_id, { $push:{activities_id: genRes.response._id}}, {new:true})
            genRes.col.count = genRes.response.length
            res.status(201).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    updateOne: async (req, res, next) => {
        try {
            genRes.response = await Activity.findByIdAndUpdate(req.params.id, req.body, {new:true})
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            genRes.response = await Activity.findByIdAndDelete(req.params.id)
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    }
}

export default activityController