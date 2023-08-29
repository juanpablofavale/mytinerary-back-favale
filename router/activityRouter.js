import { Router } from "express";
import activityController from "../controller/activityController.js";

const {getAll, getById, createOne, updateOne, deleteOne} = activityController
const activityRouter = Router()

activityRouter.get('/', getAll)
activityRouter.get('/:id', getById)
activityRouter.post('/', createOne)
activityRouter.put('/:id', updateOne)
activityRouter.delete('/:id', deleteOne)

export default activityRouter