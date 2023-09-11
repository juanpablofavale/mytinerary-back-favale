import { Router } from "express";
import activityController from "../controller/activityController.js";
import { activitySchema } from "../validators/activitySchema.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import notExistUser from "../middlewares/notExistUser.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import rolePermissions from "../middlewares/rolePermissions.js";

const {getAll, getById, createOne, updateOne, deleteOne} = activityController
const activityRouter = Router()

activityRouter.get('/', getAll)
activityRouter.get('/:id', getById)

activityRouter.use('*', passport.authenticate('jwt', {session:false}), notExistUser, isLoggedIn, rolePermissions)

activityRouter.post('/', validator(activitySchema), createOne)
activityRouter.put('/:id', validator(activitySchema), updateOne)
activityRouter.delete('/:id', deleteOne)

export default activityRouter