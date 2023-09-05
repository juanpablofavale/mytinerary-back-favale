import { Schema, model } from "mongoose";

let collection = 'users'

let schema = new Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    image: {type:String, required:true},
    country: {type:String, required:true},
    role: {type:String, required:true, default:UserActivation, enum:["user", "admin", "guide"]},
    verify: {type:Boolean, default:false}
})

let User = model(collection, schema)

export default User