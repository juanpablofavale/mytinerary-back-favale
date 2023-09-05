import { Router } from "express";
import userController from "../controller/authController.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import { authSchema } from "../validators/authSchema.js";

const {signUp, signIn} = userController

const authRouter = Router()

authRouter.post('/', validator(authSchema), existUser, signUp)
//authRouter.get('/')

export default authRouter