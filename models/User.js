import { Schema, model, Types } from "mongoose";

const collection = 'users';

let schema = new Schema({
    'name': { type: String, required: true },
    'iamge': { type: String, required: true }
}, {
    timestamps: true
})

const User = model(collection, schema)

export default User;

