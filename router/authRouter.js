import { Router } from "express";
import userController from "../controller/authController.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import { signUpSchema } from "../validators/signUpSchema.js";
import { signInSchema } from "../validators/signInSchema.js";
import notExistUser from "../middlewares/notExistUser.js";
import passCorrect from "../middlewares/passCorrect.js";
import passport from "../middlewares/passport.js";

const {signUp, signIn, signOut} = userController

const authRouter = Router()

authRouter.post('/register', validator(signUpSchema), existUser, signUp)
authRouter.get('/login', validator(signInSchema), notExistUser, passCorrect, signIn)
authRouter.get('/logout', passport.authenticate('jwt', {session:false}), notExistUser, signOut)

export default authRouter