import { Schema, model, Types } from "mongoose";

let collection = 'itineraries'

let schema = new Schema({
    usrImage: {type:String, require:true},
    usrName: {type:String, require:true},
    price: {type:Number, require:true},
    duration: {type:Number, require:true},
    likes: {type:Number, require:true},
    hashtags: [{type:String, require:true}],
    comments: [{type:String}],
    city_id: {type:Types.ObjectId, ref: 'cities'}
})

let Itinerary = model(collection, schema)

export default Itinerary