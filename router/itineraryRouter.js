import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";

const { getAllItineraries, getItinerariesByCity, getItineraryById, createOneItinerary, updateAItinerary, deleteAItinerary} = itineraryController

const itineraryRouter = Router()

itineraryRouter.get('/', getAllItineraries)
itineraryRouter.get('/city', getItinerariesByCity)
itineraryRouter.get('/:id', getItineraryById)
itineraryRouter.post('/', createOneItinerary)
itineraryRouter.put('/:id', updateAItinerary)
itineraryRouter.delete('/:id', deleteAItinerary)

export default itineraryRouter