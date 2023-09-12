import { Router } from "express";
import commentsController from "../controller/commentsController.js";
import rolePermissions from "../middlewares/rolePermissions.js";
import { itineraryCommentSchema } from "../validators/itineraryCommentSchema.js";
import validator from "../middlewares/validator.js";

const {getAll, getById, getByItineraryId, getByUserId, postOne, putOne, deleteOne} = commentsController

const commentsRouter = Router()

commentsRouter.get('/', getAll)
commentsRouter.get('/:id', rolePermissions, getById)
commentsRouter.get('/usr/:id', rolePermissions, getByUserId)
commentsRouter.get('/itin/:id', rolePermissions, getByItineraryId)
commentsRouter.post('/:id', validator(itineraryCommentSchema), postOne)
commentsRouter.put('/:id', validator(itineraryCommentSchema), putOne)
commentsRouter.delete('/:id', deleteOne)

export default commentsRouter