import { Router } from "express";
import activityController from "../controller/activityController.js";
import { activitySchema } from "../validators/activitySchema.js";
import validator from "../middlewares/validator.js";

const {getAll, getById, createOne, updateOne, deleteOne} = activityController
const activityRouter = Router()

activityRouter.get('/', getAll)
activityRouter.get('/:id', getById)
activityRouter.post('/', validator(activitySchema), createOne)
activityRouter.put('/:id', validator(activitySchema), updateOne)
activityRouter.delete('/:id', deleteOne)

export default activityRouter