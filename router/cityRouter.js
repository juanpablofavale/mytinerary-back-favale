import { Router } from "express";
import cityControler from "../controller/cityController.js";
import { citySchema } from "../validators/citySchema.js";
import validator from "../middlewares/validator.js";

const cityRouter = Router()
const {getAllCities, getCityById, createManyCities, updateCity, deleteCity} = cityControler



cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', validator(citySchema), createManyCities)
cityRouter.put('/:id', validator(citySchema), updateCity)
cityRouter.delete('/:id', deleteCity)

export default cityRouter