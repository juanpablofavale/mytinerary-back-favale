import { Schema, model, Types } from "mongoose";

let collection = 'itineraries'

let schema = new Schema({
    usrImage: {type:String, require:true},
    usrName: {type:String, require:true},
    price: {type:Number, require:true},
    duration: {type:Number, require:true},
    likes: [{type:String, default:[""]}],
    hashtags: [{type:String, require:true}],
    comments: [{type:Types.ObjectId}],
    city_id: {type:Types.ObjectId, ref: 'cities', required:true},
    activities_id: [{type: Types.ObjectId, ref: 'activities'}],
    name: {type:String, require:true}
})

let Itinerary = model(collection, schema)

export default Itinerary