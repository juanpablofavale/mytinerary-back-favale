import Comments from "../models/Comment.js";
import Itinerary from "../models/Itinerary.js";

const initResponse = () => {
    return {
        col:{
            count:0,
        },
        response: [],
        success: true,
        error: null
    }
}

const commentsController = {
    getAll: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const resp = await Comments.find()
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    getById: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const id = req.params.id
            const resp = await Comments.findById(id)
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    getByItineraryId: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const idItin = req.params.id
            const resp = await Comments.find({itinerary_id:idItin})
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    getByUserId: async (req, res, next) => {
        const genRes = initResponse()
        console.log(req.params.id)
        try {
            const idUsr = req.params.id
            const resp = await Comments.find({user_id:idUsr})
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    postOne: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const resp = await Comments.create(req.body)
            genRes.itineraryChange = await Itinerary.findByIdAndUpdate(resp.itinerary_id, {$push: {comments: resp._id}}, {new: true})
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    putOne: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const id = req.params.id
            const resp = await Comments.findByIdAndUpdate(id, req.body, {new:true})
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const id = req.params.id
            const resp = await Comments.findByIdAndDelete(id)
            genRes.itineraryChange = await Itinerary.findByIdAndDelete(resp.itinerary_id, {$pull: {comments: resp._id}}, {new: true})
            genRes.response = resp
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    }
}

export default commentsController