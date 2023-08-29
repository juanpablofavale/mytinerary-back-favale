import {Schema, model, Types} from "mongoose";

let collection = 'cities'

let schema = new Schema({
    name: {type:String, required: true},
    image: {type:String, required: true},
    state: {type:String, required: true},
    country: {type:String, required: true},
    interests: [String],
    anniversary: {type:String, required: true},
    location: {type:String, required: true}, 
    itineraries_id: [{type:Types.ObjectId, ref:'itineraries'}]
}, {
    timestamps: true
})

let City = model(collection, schema)

export default City