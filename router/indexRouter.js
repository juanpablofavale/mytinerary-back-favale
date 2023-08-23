import { Router } from 'express'
import cityRouter from './cityRouter.js'

let router = Router()

router.use('/cities', cityRouter)
router.use('/tineraries', tineraryRouter)

router.get('/', (req, res, next)=>{
    res.send({
        response: "API URL en direccion /api",
        success: true,
        error: null
    })
})

export default router