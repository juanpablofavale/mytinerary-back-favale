import express from "express";
import cityRouter from "./router/cityRouter.js";
import './config/database.js'
const server = express()
import 'dotenv/config.js'

server.use('/cities', cityRouter)

server.get('/', (req, res, next) => {
    res.send("Servidor de prueba en express")
})

server.listen(process.env.PORT, () => {console.log("Servidor escuchando en el puerto " + process.env.PORT)})