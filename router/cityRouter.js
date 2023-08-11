import { Router } from "express";
import cityControler from "../controller/cityController.js";

const cityRouter = Router()
const {getAllCities, getCityById} = cityControler

cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)

export default cityRouter