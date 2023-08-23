import { Router } from "express";

const tineraryRouter = Router()

tineraryRouter.get('/', () => {console.log("tineraries!!")})

export default tineraryRouter