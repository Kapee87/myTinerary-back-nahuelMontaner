import { Schema, model, Types } from "mongoose";

const collection = 'cities';

let schema = new Schema({
    "name": { type: String, required: true },
    "country": { type: String, required: true },
}, {
    timestamps: true
})

const cities = model(collection, schema)

export default cities