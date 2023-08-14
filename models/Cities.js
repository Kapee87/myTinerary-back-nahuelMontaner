import { Schema, model, Types } from "mongoose";

const collection = 'cities';

let schema = new Schema({
    "name": { type: String, required: true },
    "country": { type: String, required: true },
    "url": { type: String, required: true }
}, {
    timestamps: true
})

const Cities = model(collection, schema)

export default Cities;