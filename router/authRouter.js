import { Router } from "express";
import userController from "../controller/authController.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import { signUpSchema } from "../validators/signUpSchema.js";
import { signInSchema } from "../validators/signInSchema.js";
import notExistUser from "../middlewares/notExistUser.js";
import passCorrect from "../middlewares/passCorrect.js";
import passport from "../middlewares/passport.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const {signUp, signIn, signOut, updateRole} = userController

const authRouter = Router()

authRouter.post('/register', validator(signUpSchema), existUser, signUp)
authRouter.post('/login', validator(signInSchema), notExistUser, passCorrect, signIn)
authRouter.post('/token', passport.authenticate('jwt', {session:false}), signIn)
authRouter.post('/logout', passport.authenticate('jwt', {session:false}), notExistUser, signOut)
authRouter.post('/role', passport.authenticate('jwt', {session:false}), notExistUser, isLoggedIn, updateRole)

export default authRouter