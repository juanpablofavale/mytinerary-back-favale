import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

let cities = [
    {
        name:'Sierra de la ventana',
        img:'./sierra.jpg',
        id:'object id del usuario 1',
    },
    {
        name:'Sierra de la ventana',
        img:'./sierra.jpg',
        id:'object id del usuario 1',
    },
]

City.insertMany(cities)