import { Schema, model, Types } from "mongoose";

const collection = 'itinerary';

let schema = new Schema({
    "name": { type: String, required: true },
    "duration": { type: Number, required: true },
    "price": { type: Number },
    "likes": { type: Number },
    // "user":{ type:Object.}
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

