import { Router } from 'express'
import cityRouter from './cityRouter.js'
import itineraryRouter from './itineraryRouter.js'
import activityRouter from './activityRouter.js'
import authRouter from './authRouter.js'


let router = Router()

router.use('/cities', cityRouter)
router.use('/itineraries', itineraryRouter)
router.use('/activities', activityRouter)
router.use('/auth', authRouter)

router.get('/', (req, res, next)=>{
    res.send({
        response: "API URL en direccion /api",
        success: true,
        error: null
    })
})

export default router