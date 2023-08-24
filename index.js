import express from "express";
import './config/database.js'
import 'dotenv/config.js'
import cors from 'cors'
import indexRouter from './router/indexRouter.js'
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHanler from "./middlewares/errorHanler.js";

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (req, res, next) => {
    res.json({
        response: "Bienvenido a la API",
        success: true,
        error: null
    })
})

server.use(notFoundHandler)
server.use(errorHanler)

server.listen(process.env.PORT, () => {console.log("Servidor escuchando en http://localhost:" + process.env.PORT)})