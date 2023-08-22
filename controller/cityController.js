import City from "../models/City.js"

const genRes = {
    col:{
        pg: 0,
        count:0,
        pgCount:0,
        docCount:0
    },
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
            genRes.col.pg = +req.query?.pg || 0
            genRes.col.count = +req.query?.count || 0

            const skp = (genRes.col.count * genRes.col.pg)

            genRes.response = await City.find(queries).skip(skp).limit(genRes.col.count)

            genRes.col.docCount = await City.countDocuments(queries)
            genRes.col.pgCount = Math.ceil(genRes.col.docCount / genRes.col?.count)
            genRes.col.count = genRes.response.length || 0

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