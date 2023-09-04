import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";
import controlPrice from "../middlewares/controlPrice.js";

const { getAllItineraries, getItinerariesByCity, getItineraryById, createOneItinerary, updateAItinerary, deleteAItinerary} = itineraryController

const itineraryRouter = Router()

itineraryRouter.get('/', getAllItineraries)
itineraryRouter.get('/city', getItinerariesByCity)
itineraryRouter.get('/:id', getItineraryById)
itineraryRouter.post('/', controlPrice, createOneItinerary)
itineraryRouter.put('/:id', controlPrice, updateAItinerary)
itineraryRouter.delete('/:id', deleteAItinerary)

export default itineraryRouter