import { Schema, model, Types } from "mongoose";

const collection = 'cities';

let schema = new Schema({
    "city": { type: String, required: true },
    "country": { type: String, required: true },
    "image": { type: String, required: true },
    "detail": { type: String, required: true },
    "price": { type: Number },
    "itineraries": [{ type: Types.ObjectId, ref: 'Itinerary' }]
}, {
    timestamps: true
})

const City = model(collection, schema)

export default City;

