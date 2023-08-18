import { Router } from "express";
import cityControler from "../controller/cityController.js";

const cityRouter = Router()
const {getAllCities, getCityById, createManyCities, updateCity, deleteCity} = cityControler



cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', createManyCities)
cityRouter.put('/:id', updateCity)
cityRouter.delete('/:id', deleteCity)

export default cityRouter