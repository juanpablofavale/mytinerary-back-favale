import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";
import validator from "../middlewares/validator.js";
import { itinerarySchema } from "../validators/itinerarySchema.js";
import passport from "../middlewares/passport.js";
import notExistUser from "../middlewares/notExistUser.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import rolePermissions from "../middlewares/rolePermissions.js";
import { itineraryLikesSchema } from "../validators/itineraryLikesSchema.js";
import commentsRouter from "./comentsRouter.js";

const { getAllItineraries, getItinerariesByCity, getItineraryById, createOneItinerary, updateAItinerary, deleteAItinerary, updateLike} = itineraryController

const itineraryRouter = Router()


itineraryRouter.get('/', getAllItineraries)
itineraryRouter.get('/city', getItinerariesByCity)
itineraryRouter.get('/:id', getItineraryById)

itineraryRouter.use('*', passport.authenticate('jwt', {session:false}), notExistUser, isLoggedIn)

itineraryRouter.post('/', validator(itinerarySchema), rolePermissions, createOneItinerary)
itineraryRouter.put('/:id', validator(itinerarySchema), rolePermissions, updateAItinerary)
itineraryRouter.delete('/:id', rolePermissions, deleteAItinerary)

itineraryRouter.put('/like/:id', updateLike)


export default itineraryRouter