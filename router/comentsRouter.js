import { Router } from "express";
import commentsController from "../controller/commentsController.js";
import rolePermissions from "../middlewares/rolePermissions.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import notExistUser from "../middlewares/notExistUser.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import { commentSchema } from "../validators/commentSchema.js";
import { commentUpdateSchema } from "../validators/commentUpdateSchema.js";
import commentFromUser from "../middlewares/commentFromUser.js";
import newCommentFromUser from "../middlewares/newCommentFromUser.js";

const {getAll, getById, getByItineraryId, getByUserId, postOne, putOne, deleteOne} = commentsController

const commentsRouter = Router()

commentsRouter.use('*', passport.authenticate('jwt', {session:false}), notExistUser, isLoggedIn)

commentsRouter.get('/', getAll)
commentsRouter.get('/:id', rolePermissions, getById)
commentsRouter.get('/usr/:id', rolePermissions, getByUserId)
commentsRouter.get('/itin/:id', rolePermissions, getByItineraryId)
commentsRouter.post('/', validator(commentSchema), newCommentFromUser, postOne)
commentsRouter.put('/:id', validator(commentUpdateSchema), commentFromUser, putOne)
commentsRouter.delete('/:id', commentFromUser, deleteOne)

export default commentsRouter