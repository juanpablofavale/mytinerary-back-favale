import { Router } from "express";
import activityController from "../controller/activityController.js";

const {getAll, getById, createMany, updateOne, deleteOne} = activityController
const activityRouter = Router()

activityRouter.get('/', getAll)
activityRouter.get('/:id', getById)
activityRouter.post('/', createMany)
activityRouter.put('/:id', updateOne)
activityRouter.delete('/:id', deleteOne)

export default activityRouter