import {Schema, model, Types} from "mongoose";

let collection = 'cities'

let schema = new Schema({
    name: {type:String, required: true},
    img: {type:String, required: true},
    id: {type:String, required: true}
}, {
    timestamps: true
})

let City = model(collection, schema)

export default City