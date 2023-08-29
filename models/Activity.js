import { Schema, model } from "mongoose";

const collection = 'activities';

let schema = new Schema({

    "name": { type: String, required: true },
    "image": { type: String, required: true },
    "detail": { type: String },
}, {
    timestamps: true
})

const Activity = model(collection, schema)

export default Activity;

