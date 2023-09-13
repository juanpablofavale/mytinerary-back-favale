import Activity from "../models/Activity.js"
import Itinerary from "../models/Itinerary.js"

const initResponse = () => {
    return {
        col:{
            count:0,
        },
        response: [],
        success: true,
        error: null, 
        details: []
    }
}

const activityController = {
    getAll: async (req, res, next) => {
        const genRes = initResponse()
        try {
            genRes.response = await Activity.find()
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    getById: async (req, res, next) => {
        const genRes = initResponse()
        try {
            genRes.response = await Activity.findById(req.params.id)
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    createOne: async (req, res, next) => {
        const genRes = initResponse()
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
        const genRes = initResponse()
        try {
            genRes.response = await Activity.findByIdAndUpdate(req.params.id, req.body, {new:true})
            if (!genRes.response){
                genRes.details=["The activity does not exist"]
                genRes.error = true
                genRes.success = false
                return res.status(400).json(genRes)
            }
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        const genRes = initResponse()
        try {
            genRes.response = await Activity.findByIdAndDelete(req.params.id)
            if (!genRes.response){
                genRes.details=["The activity does not exist"]
                genRes.error = true
                genRes.success = false
                return res.status(400).json(genRes)
            }
            genRes.itineraryChange = await Itinerary.findByIdAndUpdate(genRes.response.itinerary_id, { $pull:{activities_id: genRes.response._id}}, {new:true})
            genRes.col.count = genRes.response.length
            res.status(200).json(genRes)
        } catch (error) {
            next(error)
        }
    }
}

export default activityController