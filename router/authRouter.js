import { Router } from "express";
import userController from "../controller/authController.js";
import existUser from "../middlewares/existUser.js";

const {signUp, signIn} = userController

const authRouter = Router()

authRouter.post('/', existUser, signUp)
//authRouter.get('/')

export default authRouter