import cities from "../data/cities.js"

const genRes = {
    response: [],
    success: true,
    error: null
}

const cityControler = {
    getAllCities: (req, res, next) => {
        genRes.response = cities
        res.json(genRes)
    },
    getCityById: (req, res, next) => {
        const { id } = req.params
        const city = cities.find(city => city.id == id)
        genRes.response = city
        res.json(genRes)
    }
}

export default cityControler