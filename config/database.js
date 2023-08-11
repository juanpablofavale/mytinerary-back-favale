import mongoose from "mongoose";
import 'dotenv/config.js'

let uri_link = process.env.MONGO

mongoose.connect(uri_link)
    .then(() => console.log('Database Connected'))
    .catch(error => console.log(error))