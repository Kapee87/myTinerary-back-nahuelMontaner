import { Schema, model, Types } from "mongoose";

const collection = 'itineraries';

let schema = new Schema({
    "name": { type: String, required: true },
    "duration": { type: String, required: true },
    "price": { type: Number },
    "likes": { type: Number },
    "user": { type: Types.ObjectId, ref: 'users' },
    "city": { type: Types.ObjectId, ref: 'cities' },
    "activities": [
        { type: Types.ObjectId, ref: 'activities' }
    ],
    "comments": [{
        "comment": { type: String },
        "user": { type: Types.ObjectId, ref: 'users' }
    }],
    "hashtags": [
        { type: String }
    ]
}, {
    timestamps: true
})

const Itinerary = model(collection, schema)

export default Itinerary;

