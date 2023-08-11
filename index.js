import express from "express";
import cityRouter from "./router/cityRouter.js";

const server = express()
const PORT = 3000

server.use('/cities', cityRouter)

server.get('/', (req, res, next) => {
    res.send("Servidor de prueba en express")
})

server.listen(PORT, () => {console.log("Servidor escuchando en el puerto " + PORT)})