import { Router } from "express";
import userController from "../controller/authController.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import { signUpSchema } from "../validators/signUpSchema.js";
import { signInSchema } from "../validators/signInSchema.js";
import notExistUser from "../middlewares/notExistUser.js";

const {signUp, signIn} = userController

const authRouter = Router()

authRouter.post('/register', validator(signUpSchema), existUser, signUp)
authRouter.post('/login', validator(signInSchema), notExistUser, signIn)

export default authRouter