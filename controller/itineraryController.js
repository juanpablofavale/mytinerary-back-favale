import Itinerary from "../models/Itinerary.js";
import City from "../models/City.js"

    const genRes = {
        col:{
            count:0,
        },
        response: [],
        success: true,
        error: null
    }

    const itineraryController = {
        getAllItineraries: async (req, res, next) =>{
            try {
                genRes.response = await Itinerary.find()
                genRes.col.count = genRes.response.length
                res.status(200).json(genRes)
            } catch (error) {
                next(error)
            }
        },
        getItinerariesByCity: async (req, res, next) =>{
            try{
                const city = await City.findOne({name: req.query.name})
                genRes.response = await Itinerary.find({city_id:city._id})
                genRes.col.count = genRes.response.length
                res.status(200).json(genRes)
            } catch (error) {
                next(error)
            }
        },
        getItineraryById: async (req, res, next) =>{
            try {
                genRes.response = await Itinerary.findById(req.params.id).populate('activities_id')
                genRes.col.count = genRes.response.length
                res.status(200).json(genRes)
            } catch (error) {
                next(error)
            }
        },
        createOneItinerary: async (req, res, next) =>{
            try {
                genRes.response = await Itinerary.create(req.body)
                genRes.cityChange = await City.findByIdAndUpdate(genRes.response.city_id, {$push: { itineraries_id: genRes.response._id}}, { new:true })
                res.status(201).json(genRes)
            } catch (error) {
                next(error)
            }
        },
        updateAItinerary: async (req, res, next) =>{
            try {
                genRes.response = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {new:true})
                res.status(200).json(genRes)
            } catch (error) {
                next(error)
            }
        },
        deleteAItinerary: async (req, res, next) =>{
            try {
                genRes.response = await Itinerary.findByIdAndDelete(req.params.id)
                genRes.cityChange = await City.findByIdAndUpdate(genRes.response.city_id, {$pull: { itineraries_id: genRes.response._id}}, { new:true })
                res.status(200).json(genRes)
            } catch (error) {
                next(error)
            }
        },
    }

    export default itineraryController