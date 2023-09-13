import { Schema, Types, model } from "mongoose";

let collection = 'comments'

let schema = new Schema({
    comment: {type: String, required: true},
    user_id: {type: Types.ObjectId, required: true},
    itinerary_id: {type: Types.ObjectId, required: true}
})

let Comments = model(collection, schema)

export default Comments