import City from "../models/City.js"

const genRes = {
    response: [],
    success: true,
    error: null
}

const cityControler = {
    getAllCities: async (req, res, next) => {
        let queries = {}
        if (req.query?.name){
            queries.name = new RegExp("^" + req.query.name, "i")
        }
        try {
            genRes.response = await City.find(queries)
	    res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    getCityById: async (req, res, next) => {
        try {
            genRes.response = await City.findById(req.params.id)
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    createManyCities: async (req, res, next) => {
        try {
            genRes.response = await City.create(req.body)
            res.status(201).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    updateCity: async (req, res, next) => {
        try {
            genRes.response = await City.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    deleteCity: async (req, res, next) => {
        try {
            genRes.response = await City.findByIdAndDelete(req.params.id)
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    }
}

export default cityControler