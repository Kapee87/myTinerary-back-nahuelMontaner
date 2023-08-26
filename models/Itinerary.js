import { Schema, model, Types } from "mongoose";

const collection = 'itinerary';

let schema = new Schema({
    "name": { type: String, required: true },
    "duration": { type: String, required: true },
    "price": { type: Number },
    "likes": { type: Number },
    "user": { type: Types.ObjectId, ref: 'User' },
    "city_id": { type: Types.ObjectId, ref: 'City' },
    "hashtags": [
        { type: String, required: true }
    ],
    "activities": [
        // { type: Types.ObjectId, ref: 'Activities' }
        {
            "name": { type: String },
            "image": { type: String },
        },
    ],
    "comments": [
        {
            "comment": { type: String },
            "user": { type: Types.ObjectId, ref: 'User' }
        }
    ]
}, {
    timestamps: true
})

const Itinerary = model(collection, schema)

export default Itinerary;

