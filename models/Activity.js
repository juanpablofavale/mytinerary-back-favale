import { Schema, model, Types } from "mongoose";

let collection = 'activities'

let schema = new Schema({
    image: {type: String, required:true},
    name: {type: String, required:true},
    itinerary_id: {type: Types.ObjectId, ref:'itineraries'}
})

let Activity = model(collection, schema)

export default Activity