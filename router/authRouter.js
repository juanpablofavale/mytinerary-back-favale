import { Router } from "express";
import userController from "../controller/authController";

const {signUp, signIn} = userController

const authRouter = Router()

authRouter.post('/', signUp)
//authRouter.get('/')

export default authRouter